

export default function Loginpage() {
  return (
    <>
     <h1>login page</h1>

    <div>
        <form >
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                name="email"
                placeholder="enter your email"
                type="email" />
                

                
                <label htmlFor="password">password:</label>
                <input 
                name="password"
                placeholder="enter your password"
                type="password" />

            </div>
            {/* login btn */}
            <div>
                <input type="submit" value='Login'/>
            </div>
        </form>
    </div>

    </>
  )
}
