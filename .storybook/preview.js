import '../src/style/index.scss'
import {addDecorator,addParameters} from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);//将所有类型的图标加载进来
const styles = { 
  padding: '20px 40px'
}
const centerDecorator = (storyFn) =>(<div style={styles} >
<h3>组件演示</h3>
{storyFn()}
</div>)

addDecorator(centerDecorator)
addDecorator(withInfo)
addParameters({info:{inline:true,header:false}})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
