<?php echo template('admin/headers');?>
    <form class="layui-form layui-card-body" method="post">

        <div class="layui-form-item">
            <label class="layui-form-label">所属区域</label>
            <div class="layui-input-block">
                <select name="data[location_id]"  >
                    <?php foreach ($location as $val){?>
                        <option value="<?php echo $val['id'];?>" ><?php echo $val['title'];?></option>
                    <?php }?>
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">绑定用户</label>
            <div class="layui-input-block">
                <div id="demo1"></div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">商家LOGO</label>
            <div class="layui-input-block">
                <?php echo admin_btn("data[logo]",'upload','logos','',1);?>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">商家名称</label>
            <div class="layui-input-block">
                <input type="text" id="title" name="data[title]" class="layui-input"   lay-verify='required' >
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">商家简介</label>
            <div class="layui-input-block">
                <input type="text" id="title" name="data[info]" class="layui-input"   lay-verify='required' >
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">联系电话</label>
            <div class="layui-input-block">
                <input type="text" name="data[mobile]"  class="layui-input"  lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">联系人</label>
            <div class="layui-input-block">
                <input type="text" name="data[username]" class="layui-input"  lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地图选择</label>
            <button type='button' class='layui-btn open' >打开地图</button>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">商家地址</label>
            <div class="layui-input-block">
                <input type="text"  id="address" name="data[address]" class="layui-input" readonly placeholder="点击打开地图,选择后自动填写" lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址坐标</label>
            <div class="layui-input-block">
                <input type="text" name="data[point]" id="point" class="layui-input" readonly placeholder="点击打开地图,选择后自动填写" lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">顶部图片</label>
            <div class="layui-input-block">
                <?php echo admin_btn("data[thumb_top]",'upload','thumb_top','',1);?>
                <div class="thumb-say">只能上传一张图片（100px * 100px）</div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">工商资质</label>
            <div class="layui-input-block">
                <?php echo admin_btn("data[thumb]",'upload','thumb','',1);?>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">技术服务费</label>
            <div class="layui-input-block">
                <input type="text" name="data[technical]"  class="layui-input" placeholder="填写方式写1代表1%，0代表无服务费"  lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">帐号</label>
            <div class="layui-input-block">
                <input type="text" name="data[account]"  class="layui-input"  lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-block">
                <input type="text" name="data[pwd]"  class="layui-input"  lay-verify='required'>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">备注</label>
            <div class="layui-input-block">
                <input type="text" name="data[mark]"  class="layui-input" >
            </div>
        </div>
        <div>
            <input type="hidden" name="data[province]" id="province" lay-verify='required'>
            <input type="hidden"  name="data[city]" class="city" lay-verify='required'>
            <input type="hidden" name="data[district]" id="district" lay-verify='required'>
            <?php echo admin_btn($add_url,'save','layui-btn-fluid',"lay-filter='sub' location='close_iframe'")?>
        </div>

    </form>
<?php echo template('admin/script');?>
    <script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=<?php echo $qqmap_key; ?>"></script>
    <script>
        layui.config({
            base: base_url_js+'res/layui/module/TMap/'
        }).use('TMap');

        // 加载并使用模块
        layui.use(['layer', 'TMap'], function(){
            var layer = layui.layer;
            var $ = layui.jquery;
            var TMap = layui.TMap;
            $('.open').click(function () {
                TMap.open({
                    key: "<?php echo $qqmap_key; ?>",
                    dialog: {title: '番茄地图坐标拾取器'},
                    onChoose: function (point, adress,address_component, myIndex) {
                        $('#province').val(address_component.province);
                        $('.city').val(address_component.city);
                        $('#district').val(address_component.district);
                        $('#address').val(adress);
                        $('#point').val(point);
                    }
                });
            });
        });
        var demo1 = xmSelect.render({
            el: '#demo1',
            autoRow: true,
            toolbar: { show: true },
            filterable: true,
            remoteSearch: true,
            radio: true,
            name:'data[uid]',
            remoteMethod: function(val, cb, show){
                //这里如果val为空, 则不触发搜索
                if(!val){
                    return cb([]);
                }
                //这里引入了一个第三方插件axios, 相当于$.ajax
                axios({
                    method: 'get',
                    url: site_url_js+'/adminct/user/user/search',
                    params: {
                        keyword: val,
                    }
                }).then(response => {
                    var res = response.data;
                    cb(res.data)
                }).catch(err => {

                });
            },
        })
    </script>
<?php echo template('admin/footers');?>