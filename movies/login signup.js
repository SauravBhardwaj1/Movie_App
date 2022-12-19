
    //2. CF to create object of above data
    //3. where we need to send the data (masai server)
    //4. Do i need server communication


    const getInput= (id)=>{
        let value=document.getElementById(id).value;

        return value;
    }

    function User(n,e,p,u,m,d){
        this.name=n;
        this.email=e;
        this.password=p;
        this.username=u;
        this.mobile=m;
        this.description=d
    }

    //1 collect the data
    const Register= async ()=>{
        const name=getInput('name')

        const email=getInput('email')

        const password=getInput('password')

        const username=getInput('username')

        const mobile=getInput('mobile')

        const description=getInput('description')

        let userData=new User(name,email,password,username,mobile,description);
        console.log(userData)


        const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`

        //post request in fetch
        // by default, fetch will make GET request

        //WHAT if we want to do post request?

        let res= await fetch(register_url,{
            method: 'POST',

            body: JSON.stringify(userData),

            headers:{
                'content-type': 'application/json',
            }
        });
        let data= await res.json()

    }

    const login= async ()=>{
        let login_data={
            username:document.getElementById('login-username').value,
            password:document.getElementById('login-password').value,
        };

        const login_url= "https://masai-api-mocker.herokuapp.com/auth/login"

        let res= await fetch(login_url,{
            method:'POST',
            body:JSON.stringify(login_data),

            headers:{
                'Content-Type': 'application/json',
            },
        })

        let data=await res.json();
        let token=data.token
            getProfile(login_data.username,token)
        // console.log(data)


    }

    const getProfile = async(username,token)=>{
        //url,username,tocken

        //method: Get

        let api=`https://masai-api-mocker.herokuapp.com/user/${username}`

        let res=await fetch(api,{

            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            },
        })
        let data=await res.json();
        console.log(data)
    }
