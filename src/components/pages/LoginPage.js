import React,{useState} from 'react'
import '../../App.css'
import HomePage from './HomePage'
import profile from '../../assets/images/profile.webp'
import pik from '../../assets/images/freepik.webp'


export default function SignInPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("" )
    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name!=="rohit"||email!=="rroo@gmail.com"||password!=="1234567890"||phone!=="9876543210"){
            console.log("incorrect");
            setError(true);

        }
        else{
            setLoggedIn(true);
            console.log("correct");
            alert("YOU ARE A VALID USER")
        }    
    }

    if(loggedIn)
        return <HomePage/>


    return (
        <div className="text-center m-5-auto" style={{backgroundColor:"#00cc99"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:"absolute",bottom:-50,zIndex:0}}>
  <path fill="#cc66ff" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,90.7C640,75,800,85,960,74.7C1120,64,1280,32,1360,16L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <div className='main'>
        <div className='bg'></div>
            <form onSubmit={handleSubmit} method="POST">
            {/* <div > */}
            {/* <div > */}
            <img src={profile} alt="pfp" className='profile' />
            {/* </div> */}
            {error && 
            <p>Incorrect details</p>}
                <p>
                    
                    <input type="text" name="first_name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='YOUR NAME' />
                </p>
                <p>
                    
                    <br/>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='EMAIL' />
                </p>
                <p>
                    
                    <br/>
                    <input type="password" name="password" required placeholder='PASSWORD' value={password} onChange = {(e) => setPassword(e.target.value)} />
                </p>

                <p>
                    
                    <br/>
                    <input type="number" name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder='PHONE' />
                </p>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <button id="sub_btn"  value="Login" style={{backgroundColor:"#00cc99"}} name="submit">Reset</button>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Register
                    </button>
                    </div>

                {/* </div> */}
            </form>
            
            <footer style={{margin:"5%", color:"white"}}>
            <p>designed by <span><img src={pik} style={{height:"20px", width:"20px"}} /> freepik</span> </p> <p></p>
        </footer>
            </div>
           
        </div>
    )
}
