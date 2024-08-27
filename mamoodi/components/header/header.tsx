import styles from "./header.module.scss";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {

    const [open, setOpen] = React.useState(false);

    const menu = [
        {
            id: 0,
            name: "หน้าแรก",
            url: "https://mamoodi.com/"
        },
        {
            id: 1,
            name: "ดูดวงรายวัน",
            url: "https://app.mamoodi.com/tarot-1"
        },
        {
            id: 2,
            name: "ดูดวงทะเบียนรถ",
            url: "https://app.mamoodi.com/car-hora"
        },
        {
            id: 3,
            name: "ดูดวงจากชื่อ",
            url: "https://app.mamoodi.com/name-hora"
        }
        ,
        {
            id: 4,
            name: "ดูดวงเบอร์โทรศัพท์",
            url: "https://app.mamoodi.com/tel-hora"
        },
        {
            id: 5,
            name: "ตรวจหวยออนไลน์",
            url: "https://app.mamoodi.com/lotto"
        },
        {
            id: 5,
            name: "บทความ",
            url: "/articles"
        }
    ]

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const clickOpenWeb = (url, name) => {

        window.open(url, "_self");
    }

    const clickHome = (url, name) => {
        window.open("/", "_self");
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {
                    menu.map((item, index) => {
                        return (
                            item.name == "ADD LINE OA" ?

                                <Button key={item.name}
                                    style={{ backgroundColor: '#06c755', color: '#fff', marginLeft: '15px' }}
                                    onClick={() => clickOpenWeb(item.url, item.name)}
                                >{item.name}

                                </Button>
                                :
                                item.id == 3 ?

                                    <ListItem key={item.name} disablePadding>
                                        <ListItemButton onClick={() => clickHome(item.url, item.name)}>
                                            <ListItemText className={styles.headerMenuMobileText} primary={item.name} />
                                        </ListItemButton>
                                    </ListItem> :

                                    <ListItem key={item.name} disablePadding>
                                        <ListItemButton onClick={() => clickOpenWeb(item.url, item.name)}>
                                            <ListItemText className={styles.headerMenuMobileText} primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                        )
                    })
                }

            </List>
        </Box>
    );
    return (

        <>
            <div className={styles.headerMain}>
                <div className={styles.headerLogoControl}>
                    <img alt="MamooDi"
                        onClick={() => clickOpenWeb("https://mamoodi.com/", "Home")}
                        src="/assets/images/logo.png" className={styles.headerLogoImg}></img>
                    <img className={styles.headerLogoTextImg}
                        onClick={() => clickOpenWeb("https://mamoodi.com/", "Home")}
                        src="/assets/images/text-logo.png"></img>
                </div>

                <div className={styles.headerMenuControl}>
                    {
                        menu.map((item, index) => {

                            return (
                                item.name != "ADD LINE OA" ?
                                    <a key={index} className={styles.headerMenuText}
                                        onClick={() => clickOpenWeb(item.url, item.name)}>{item.name}</a> :

                                    <Button key={index} className={styles.headerLINEOAButton}>{item.name}</Button>


                            )
                        })
                    }

                </div>
                <div className={styles.headerMenuMobile}>
                    <FontAwesomeIcon className={styles.headerMenuMobileToggle} icon={faBars} onClick={toggleDrawer(true)}></FontAwesomeIcon>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;