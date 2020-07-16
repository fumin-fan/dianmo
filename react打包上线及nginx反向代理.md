# 2020年7月6日

1. create-react-app 创建的项目开发完成后，在打包成生产环境前，先在package.json中增加homepage字段

2. ```javascript
   "homepage": "./",     
       //目的是为了href="%PUBLIC_URL%/favicon.ico"解析成当前目录
   ```

3. 开发环境下用的的BrowerRouter全部换成HashRouter,具体牵扯到服务器指定路径跳转与本地开发环境下的浏览器指定路径跳转不一样。

4. yarn build  或 npm run build 打包编译，window下项目文件中会生成build文件。

5. 购买服务器

6. ```html
   阿里云的ECS,玩转校园生态 ，只要9.5元一个月
   https://promotion.aliyun.com/ntms/act/campus2018.html
   ```

7. 使用putty连接上服务器

8. ```js
   安装与使用详细教程：https://help.aliyun.com/document_detail/25434.html?spm=a2c4g.11186623.6.669.49da7394AzkLLR
   ```

9. 服务器环境配置

10. ```js
    // 1. 下载ngin依赖
    wget  http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
    // 2. 安装依赖
    rpm -ivh nginx-release-centos-7-0.el7.ngx.noarch.rpm
    // 3. 安装nginx
    yum install nginx  
    // 4. 启动并开机自启动
    systemctl start nginx.service  
    systemctl enable nginx.service
     //参考网址https://blog.csdn.net/qq799028706/article/details/94463559
    ```

11. 去阿里云服务器里添加上80端口的安全规则，然后通过公网IP就可以直接看到Nginx的欢迎界面了。

![image-20200713181955161](C:\Users\10850\AppData\Roaming\Typora\typora-user-images\image-20200713181955161.png)

1. ```html
   阿里云的安全组配置
   
   如果你使用的是阿里云，记得到ECS实例一下打开端口。
   
   步骤如下：
   
   
   
   1.进入阿里云控制台，并找到ECS实例。 i-8vb6fzvzjg9hu4kz450t
   2.点击实例后边的“更多”
   3.点击“网络和安全组” ，再点击“安全组配置”
   4.右上角添加“安全组配置”
   5.进行80端口的设置
   ```

2. 把build后的文件传到服务器上

3. windows用户强力推荐`winscp`来进行操作，非常方便,用这个`winscp`，可以直接将文件拖到服务器上。 winscp下载地址：百度搜索，免费的

4. 文件可以上传到/usr/local/react/dianmo  目录下

5. 配置nginx

6. ```
   cd /etc/nginx  进入文件
    ls查看
    两个非常重要的：1. nginx.conf 文件是Nginx总配置文件，在我们搭建服务器时经常调整的文件。 vim nginx.conf查看或修改
    2.cd conf.d 进入文件夹，里面有default.conf默认配置文件
   ```

7. ```js
    cd conf.d文件夹vim dianmo.conf , 在里面创建服务器配置文件dianmo.conf
    ```

   

   server {
       listen      80;
       server_name 39.99.156.214;  //注释：如果只是存储本地数据，那么只需要localhost即可，如果要服务器返回数据，要写ip地址。

       location /dianmo {
           root    /usr/local/react;
           index   index.html;
           try_files   $uri /dianmo/index.html;
       }
       
     location ~.*(js|css|png|gif|jpg|mp3|ogg)$ {
           root /usr/local/react/dianmo/;
   }
       
   }

```tex
server {
    listen      8081;
    server_name localhost; 

    location /iGoMovie {
        root    /usr/local/react;
        index   index.html;
        try_files   $uri /iGoMovie/index.html;
    }

  location ~.*(js|css|png|gif|jpg|mp3|ogg)$ {
        root /usr/local/react/iGoMovie/;
	}
    
}
```



   ```

8. 配置好之后，重载一下nginx配置 

9. ```
   nginx -s reload
   ```

10. 浏览器访问访问`http://ip:port/dianmo`即可

11. ```javascript
    具体参考资料
    https://blog.csdn.net/qq799028706/article/details/94463559
    
    https://jspang.com/detailed?id=39
    
    //nginx找不到静态（css,js,html）文件404报错，root的解析
    https://blog.csdn.net/lwgkzl/article/details/81278985 
    
    //root和alias的区别
    https://blog.csdn.net/line_aijava/article/details/71473793
    
    //location 匹配规则
    https://moonbingbing.gitbooks.io/openresty-best-practices/ngx/nginx_local_pcre.html 
    ```