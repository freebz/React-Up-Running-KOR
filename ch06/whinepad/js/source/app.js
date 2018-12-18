'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

var data = JSON.parse(localStorage.getItem('data'));

// 기본 예제 데이터, 스키마에서 읽음
if (!data) {
    data = {};
    schema.forEach(item => data[item.id] = item.sample);
    data = [data];
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Welcome to Whinepad!
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  document.getElementById('pad')
);
