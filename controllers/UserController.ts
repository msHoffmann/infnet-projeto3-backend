import { User } from "../model/user.entity";

class UserController {
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
  public sendEmail(email: string): void {}
}

export default UserController;
