import User from '../models/User.js';

export default async function registerController (req, res) {
  res.render('register')
}

export async function PostRegisterController(req, res) {
  console.log(req.body)
  const { email, password } = req.body;

  const errors = [];

  try {
    if (
      email.trim() === "" ||
      password.trim() === ""
  ) {
    const errorMessage = "Tous les champs sont obligatoires !"
    res.redirect(`/add?error=${encodeURIComponent(errorMessage)}`)
    return;
  }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render('register', { error: 'Cet utilisateur existe déjà.' });
    }

    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    res.redirect('/login');
  }
  catch (err){
    if ( errors.length > 0)
      res.render('home')

}}