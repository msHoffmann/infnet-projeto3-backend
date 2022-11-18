import { User } from "../model/user.entity";
import Mail from "../utils/Mail";
class UserController {
  mail: Mail;
  constructor(rootDir: string | null) {
    this.mail = new Mail(rootDir);
  }
  public async confirmEmail(pin: string): Promise<any> {
    let result = {
      statusCode: 200,
      msg: "",
    };
    try {
      const user = await User.findOne({
        where: {
          pin,
        },
      });

      if (user) {
        await User.update(
          { active: 1, pin: "" },
          {
            where: {
              pin,
            },
          }
        );
        result["msg"] = "E-mail verificado com sucesso!";
      } else {
        result["msg"] = "Token inválido. Tente novamente.";
        result["statusCode"] = 400;
      }
    } catch (err) {
      result["msg"] = "Erro ao tentar validar o e-mail. Tente novamente.";
      result["statusCode"] = 400;
    }
    return result;
  }
  public async sendToken(
    pin: string | null,
    email: string,
    name: string | null
  ): Promise<any> {
    try {
      this.mail.sendEmail(email, "Confirmação de E-mail", "token-email", {
        pin,
        name,
        url: "http://localhost:3000/auth/confirm-email",
      });
    } catch (err) {
      console.log(`Erro ao enviar e-mail ${err}`);
    }
  }
}

export default UserController;
