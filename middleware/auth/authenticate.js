export default function ({ store, redirect, router }) {
  if (store.$auth.loggedIn) {
    return redirect('/')
  }
}
