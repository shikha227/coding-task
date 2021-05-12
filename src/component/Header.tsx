import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, MenuItem } from "@material-ui/core";
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhonelinkOffIcon from "@material-ui/icons/PhonelinkOff";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  icon: {
    color: "#FFFFFF",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#BB1FA2"
  }
}));

export default function Header() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile"

  const renderMenu = (
    <StyledMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
    </StyledMenu >
  );


  const renderMobileMenu = (
    <StyledMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton className={classes.icon}>
          <AccountCircleIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.icon}>
          <PhonelinkOffIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.icon}>
          <AssignmentTurnedInIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.icon}>
          <ShareOutlinedIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton className={classes.icon}>
          <SearchIcon />
        </IconButton>
      </MenuItem>
    </StyledMenu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#BB1FA2" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            kollektor.io – Welcome, Magnus Iversson!
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton className={classes.icon}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <PhonelinkOffIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <AssignmentTurnedInIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <ShareOutlinedIcon />
            </IconButton>
            <IconButton className={classes.icon}>
              <SearchIcon />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}

    </div>
  );
}
