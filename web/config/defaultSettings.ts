/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '中间件网关',
  pwa: false,
  iconfontUrl: '/apisix-dashboard/favicon.png',
  serveUrlMap: {
    dev: 'http://139.217.190.60',
    test: 'http://localhost:9000',
  },
} as LayoutSettings & {
  pwa: boolean;
  serveUrlMap: {
    dev: string;
    test: string;
  };
};
