const Auth_Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="flex items-center justify-center min-h-screen min-w-full">
            {children}
        </div>
     );
}
 
export default Auth_Layout;