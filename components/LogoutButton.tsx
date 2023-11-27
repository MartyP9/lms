

function LogoutButton() {
  return (
    <form action='auth/sign-out' method="post">
      <button className="py-2 px-4 rounded-md no-underline" type="submit">Logout</button>
    </form>
  )
}

export default LogoutButton