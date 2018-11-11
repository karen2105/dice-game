
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import UserSelect from "@/components";
import store from '@/store';

const index = (
  <Provider  store={store}>
    <UserSelect />
  </Provider>
);

ReactDOM.render(index, document.getElementById("root"));
