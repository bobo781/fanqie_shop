<?php echo template('admin/headers');?>
<form class="layui-form layui-card-body" method="post">
	<div class="layui-form-item">
		<label class="layui-form-label">上级分类</label>
		<div class="layui-input-block">
			<select name="data[pid]"  >
				<option value="0">顶级分类</option>
                <?php foreach ($cat as $v){?>
                <option value="<?php echo $v['id'];?>" <?php if ($v['id']==$pid)echo 'selected';?>><?php echo $v['fh'].$v['title'];?></option>
                <?php }?>
            </select>
		</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">分类名称</label>
		<div class="layui-input-block">
			<input type="text" name="data[title]" class="layui-input"  lay-verify='required'>
		</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">分类图标</label>
		<div class="layui-input-block">
			<?php echo admin_btn("data[icon]",'upload','icons','',1);?>
		</div>
	</div>
    <div class="layui-form-item">
        <label class="layui-form-label">主题图片</label>
        <div class="layui-input-block">
            <?php echo admin_btn("data[thumb]",'upload','thumb','',1);?>
        </div>
    </div>
	<div class="layui-form-item">
		<label class="layui-form-label">排序数字</label>
		<div class="layui-input-block">
			<input type="text" name="data[sort]" value="0" class="layui-input" placeholder="排序数字" lay-verify='required|number'>
		</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">是否显示</label>
		<div class="layui-input-block">
			<input type="hidden" name="data[status]" value="0" >
			<input type="checkbox" name="data[status]" value="1"  lay-skin="switch" checked>
		</div>
	</div>
	<div>
		<?php echo admin_btn($add_url,'save','layui-btn-fluid',"lay-filter='sub' location='close_iframe'")?>
	</div>
</form>
<?php echo template('admin/script');?>
<?php echo template('admin/footers');?>