import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './component/Button/button';
import Menu from './component/Menu/menu';
import MenuItem from './component/Menu/menuItem';
import SubMenu from './component/Menu/subMenu';
import Icon from './component/Icon/icon';
import Transiton from './component/Transition/transition'
library.add(fas);//将所有类型的图标加载进来
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='search' theme='danger' size='10x' />
        <Menu defaultIndex='0'>
          <MenuItem>
            cool Link1
          </MenuItem>
          <MenuItem>
            cool Link2
          </MenuItem>
          <SubMenu title='droptdowm'>
            <MenuItem>
              cool Link3
            </MenuItem>
            <MenuItem>
              cool Link4
            </MenuItem>
          </SubMenu>
        </Menu>


        <Button size='lg' onClick={() => { setShow(!show) }} >Toggle</Button>

        <Transiton
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType='primary' size='lg'>Transition Large Primary</Button>

        </Transiton>
        <Button disabled >Diable Button</Button>
        <Button btnType='primary' size='lg'>Large Primary</Button>
        <Button btnType='danger' size='sm'>Small Danger</Button>
        <Button btnType='link' href="www.baidu.com">LINK</Button>
        <Button btnType='link' href="www.baidu.com" disabled>Disabled LINK</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
