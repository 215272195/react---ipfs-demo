
## react-文件上传-ipfs-demo
安装
执行
使用
react配合使用
  ● 区块链上的文件系统，星际文件系统，上传文件之后会保留文件的hash值，会做各式各样的备份，存储的文件不会丢失
  ● 相当无线大的，全局分布式的百度云盘

安装
cnpm i ipfs -g

执行
jsipfs


使用
  ● 初始化
      ○ jsipfs init
  ● 添加文件到ipfs网络
      ○ 项目目录中 jsipfs add index.html
  ● 读取文件信息
      ○ jsipfs cat QmULwKMBJeUQNATh8maL4oBSCDvXygCwhXXEHJ9GfQHrT4
      ○ 如果你的文件存在 直接使用这个方式可以读取
          ■ 需要同步才可以看到
              ● jsipfs daemon
          ■ https://ipfs.io/ipfs/加上你的hash值直接就可以访问
  ● 查看所有的配置
      ○ jsipfs config show

react配合使用
  ● 安装
      ○ cnpm i ipfs-api -S
  ● 使用
      ○ import ipfsAPI from 'ipfs-api'
  ● 开启ipfs后台服务
      ○ jsipfs daemon
  ● 跨域问题： 这段配置输入到node内， appjs的配置端口配置对
      ○ jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["*"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials  '["true"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers  '["Autherization"]'
jsipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers  '["Location"]'






























