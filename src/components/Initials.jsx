export default function Form() {
    return (
        <div>
            <h2>Credentials</h2>
            <form>
                <label htmlFor="">Full Name :  </label>
                <input type="text" maxLength={16} placeholder="your Name"/>
                <br />
                <label htmlFor="">Email Address  : </label>
                <input type="text" maxLength={20} placeholder="example@gmail.com"/>
                <br />
                <label htmlFor="">Phone Number :  </label>
                <input type="text" minLength={9} maxLength={13} placeholder="+92-445538920" />
                <br />
            </form>
        </div>
    )
}