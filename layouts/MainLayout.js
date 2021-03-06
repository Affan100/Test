import Link from 'next/link'

const MainLayout = props => {
    return (
        <div className='container'>
            <div className='topbar'>

                <div className='logo-container'>
                    <Link href='/'>
                        <a className='link'> STOCK </a>
                    </Link>
                </div>

                <div className='menu-container'>
                    <div>
                        <Link href='/'>
                            <a className='link'> Product</a>
                        </Link>
                    </div>

                    <div>
                        <Link href='/'>
                            <a className='link'>Manage</a>
                        </Link>
                    </div>

                    <div>
                        <Link href='/'>
                            <a className='link'>Profile </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>

            <style jsx global>{`
                @font-face {
                    font-family: Roboto;
                    scr:url(/static/fonts/Roboto-Black.ttf);
                }
                body {
                    margin: 0;
                    font-family:'Roboto';
                }
            `}</style>
            <style jsx>{`
                .topbar {
                    display: flex;
                    justify-content:  space-between;
                    align-item: center;
                    height: 32px;
                    padding: 0 40px;
                    box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
                }
                .menu-container{
                    display: flex;
                }
                .menu-container div {
                    margin-left: 5px;
                    text-decorator: none;
                }
                .link{
                    text-decoration: none;
                    color: black;
                }
            `}</style>

        </div>
    )
}
export default MainLayout;