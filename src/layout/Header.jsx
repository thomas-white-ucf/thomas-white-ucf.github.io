import * as React from "react";
// import { Link } from "react-router-dom";
// ======
import { AppBar, Toolbar, IconButton, Menu, Typography, Box, Tooltip, MenuItem } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

import Links from "../components/Links/Links";
import ConnectLinks from "../components/Links/ConnectLinks";

// const pages = ["Home", "Projects", "Resume"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  //

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //

  return (
    <>
      <AppBar
        sx={{
          // mb:0,
          // pb:0,
          position: "fixed",
          // zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient( #151a22, #151a22, #d3d3d3)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Thomas White
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <MenuItem onClick={handleCloseNavMenu}>
                <Links />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Thomas White
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Links />

            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="contact links">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1, backgroundColor: "white" }}
              >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Typography variant="subtitle2">Connect</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem>
                <ConnectLinks />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

// target = "_blank";
// rel = "noopener noreferrer";