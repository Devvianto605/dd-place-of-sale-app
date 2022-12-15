import axios from "axios";
import { Component } from "react";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
//  import Paper from '@mui/material/Paper';
//  import Typography from '@mui/material/Typography';
//  import ButtonBase from '@mui/material/ButtonBase';
import { Box, Card, Typography, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
//  import { FlareSharp } from "@mui/icons-material";

export default class RenderMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichMenus: 'all',
      recommendQ: true,
      firstT: true,
      menusList: [],
      /*
      activeItem: {
        menu_id: "",
        name: "",
        description: "",
        price:"",
        category:"",
        empty: "",
      },
      */
    };
  }
  
    componentDidMount() {
        this.refreshList();
      }
    
      refreshList = () => {
        axios
          .get('http://127.0.0.1:8000/ddposmenus/menus/')
          .then((res) => this.setState({ menusList: res.data }))
          // eslint-disable-next-line
          .catch((err) => console.log(err));
      };

      handleClickRc = () => {
        // Changing state
        this.setState({whichMenus : 'all', firstT: true })
      }

      handleClickVt = () => {
        // Changing state
        this.setState({whichMenus : 'vt', firstT: false })
      }

      handleClickTh = () => {
        // Changing state
        this.setState({whichMenus : 'th', firstT: false })
      }

      handleClickSc = () => {
        // Changing state
        this.setState({whichMenus : 'sc', firstT: false })
      }

      handleClickSw = () => {
        // Changing state
        this.setState({whichMenus : 'sw', firstT: false })
      }

      handleClickDk = () => {
        // Changing state
        this.setState({whichMenus : 'dk', firstT: false })
      }
      
      renderItems = () => {
        const {whichMenus} = this.state;
        const {recommendQ} = this.state;
        const {firstT} = this.state;
        const newItems = this.state.menusList.filter(
          (item) => (whichMenus === 'all' ? true :item.category === whichMenus) && (firstT === true ? item.recommend === recommendQ : true) 
        );
        /* 
        const Img = styled('img')({
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        });
        */
        const StyledProductImg = styled('img')({
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
        });
    
        return (
          <>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <Grid item xs={4} >
            <Button variant="text"
                    onClick={this.handleClickRc} >
                เมนูแนะนำ
            </Button>
          </Grid>
          <Grid item xs={4} >
            <Button variant="text" 
                    onClick={this.handleClickVt} >
                อาหารเวียดนาม
            </Button>
          </Grid>
          <Grid item xs={4} >
            <Button variant="text"
                    onClick={this.handleClickTh} >
              อาหารไทย-อีสาน
            </Button>
          </Grid>
          <Grid item xs={4} >
            <Button variant="text"
                    onClick={this.handleClickSc} >
                อาหารจานเดียว
            </Button>
          </Grid>
          <Grid item xs={4} >
            <Button variant="text"
                    onClick={this.handleClickSw} >
                ของหวาน
            </Button>
          </Grid>
          <Grid item xs={4} >
            <Button variant="text"
                    onClick={this.handleClickDk} >
                เครื่องดื่ม
            </Button>
          </Grid>
        </Grid>
        <Divider variant="middle" />

          <Grid container spacing={3}>
            {newItems
                    .sort((a,b) => a.menu_id - b.menu_id)
                    .map((item) => (
              <Grid key={item.menu_id} item xs={6} lg={3}>
                <Card>
                  <Box sx={{ pt: '100%', position: 'relative' }}>
                    <StyledProductImg alt={item.name} src={item.img} />
                  </Box>

                  <Stack spacing={2} sx={{ p: 3 }}>
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1">
                        {item.price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
          </>
        );
      }

      render() {
        return (
                  <ul>
                    {this.renderItems()}
                  </ul>
        );
      }
}