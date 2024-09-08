import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const useremail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push('/home');
            }
        });
    }, [username]);


    const handleAuth = () => {
    if (!username){
      auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        }).catch((error)=> {
            alert(error.message);
        });
    
    } else if (username) {
        auth.signOut().then(() => {
            dispatch(setSignOutState())
                history.push('/');
            }).catch((err) => alert(err.message));
    }
    };


    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };
    
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt=""/>
            </Logo>
            {
                !username ? (
                    <Login onClick={handleAuth}>
                        Login
                    </Login>
                ) : (
                    <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt=""/>
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="/images/search-icon.svg" alt=""/>
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img src="/images/watchlist-icon.svg" alt=""/>
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/originals">
                            <img src="/images/original-icon.svg" alt=""/>
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movies">
                            <img src="/images/movie-icon.svg" alt=""/>
                            <span>MOVIES</span>
                        </a>
                        <a href="/series">
                            <img src="/images/series-icon.svg" alt=""/>
                            <span>SERIES</span>
                        </a>
                        </NavMenu>
                        <SignOut>
                        <UserImg src={userPhoto} alt={username}/>
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                            </SignOut>


                    </>
                )
            }

        </Nav>
    );
}

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    position: sticky;
    top: 0;
    z-index: 100;
`;

const Logo = styled.a`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            margin-right: 4px;
            max-width: 20px;
            max-height: 20px;
            margin-top: 0px;
            margin-bottom: 4px;

        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }

    
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    margin-left: auto;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
    @media (max-width: 768px) {
        display: flex;
        margin-left: auto;
    }
`;
 

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
    margin-left:auto;
    
`;

const DropDown = styled.div`
    position: fixed;
    top: 48px;
    right: 0px;
    background: rgba(19, 19, 19, 0.8);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-left:auto;
    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        
        
       
    }
    &:hover {
        ${DropDown} {
            position: fixed;
            opacity: 1;
            transition-duration: 1s;  
        }
    }
`;  


export default Header;
