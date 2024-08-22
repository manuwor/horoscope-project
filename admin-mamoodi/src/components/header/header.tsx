import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../context/auth-context';

interface HeaderProps {
    title: string;
    isBack: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isBack }) => {
    const navigate = useNavigate();
    const {user,logout} = useAuth();

    const handleBack = () => {
        navigate(-1); // This will navigate to the previous page in history
    };

    useEffect(() => {


        if(!user){
            navigate("/")
        }

    },[user])

    

    return (
        <header style={headerStyle}>
            {
                isBack && <button onClick={handleBack} style={backButtonStyle}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            }

            <h1 style={titleStyle}>{title}</h1>
            <Button style={logoutStyle} onClick={logout}>ออกจากระบบ</Button>
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '0px',
    width: '100%',
};

const backButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    marginRight: '10px',
    color: '#fff'
};

const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff'
};

const logoutStyle: React.CSSProperties = {
    marginLeft: 'auto',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#fff'
};

export default Header;
