import { validate as validateEmail } from "email-validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { SESSION_SECRET } = process.env;

export default async function LoginController(req, res) {
  res.render("login");
}

export async function PostLoginController(req, res) {
  console.log("POST envoyé", req.body);
  const emailValidated = validateEmail(req.body.email);
  if (!emailValidated) {
    return res.status(400).send(`<h1>Erreur !</h1><p>Email invalide !</p>`);
  }

  try {
    const token = jwt.sign(
      {
        email: req.body.email,
        admin: true,
      },
      // @ts-ignore
      SESSION_SECRET
    );

    res.json({
      success: 1,
      message: "Utilisateur authentifié",
      token,
    });
  } catch (err) {
    res.json({
      error: 1,
      message: err.message,
    });
  }
}

// export function LogoutController(req, res) {
//   req.session.destroy((err) => {
//     if (err) {
//       res.status(500).send(`<h1>Erreur !</h1><p>${err.message}</p>`)
//       return
//     }
//     res.redirect('/login')
//   })
// }
