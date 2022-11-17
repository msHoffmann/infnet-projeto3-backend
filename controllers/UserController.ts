import { User } from "../model/user.entity";
import Mail from "../utils/Mail";
class UserController {
  mail: Mail;
  constructor() {
    this.mail = new Mail();
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
  public async sendToken(token: string, email: string): Promise<any> {
    console.log(token);
    this.mail.sendEmail(
      email,
      "Confirmação de e-mail",
      "HTML de envio de e-mail"
    );
  }
}

export default UserController;
