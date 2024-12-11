export function LoginForm() {
  return (
    <form>
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-input"
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-input"
          autoComplete="password"
        />
        <p className="text-sm cursor-pointer hover:underline hover:text-blue-600">
          I forgot my password.
        </p>
      </div>
      <button className="w-full primary-button">Enter</button>
    </form>
  );
}

export function RegisterForm() {
  return (
  <form>
    <div className="form">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" className="form-input" autoComplete="name" />
      <label htmlFor="dob">Date of birth</label>
      <input id="dob" type="date" className="form-input" autoComplete="dob" />
      <label htmlFor="newEmail">Email</label>
      <input
        id="newEmail"
        type="email"
        className="form-input"
        autoComplete="newEmail"
      />
      <label htmlFor="newPassword">Password</label>
      <input
        id="newPassword"
        type="password"
        className="form-input"
        autoComplete="newPassword"
      />
      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        className="form-input"
        autoComplete="confirmPassword"
      />
    </div>
    <button className="w-full primary-button">Submit</button>
  </form>
  )
}
