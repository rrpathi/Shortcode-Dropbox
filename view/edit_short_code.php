<?php 
	$shotcode_name = $edit_short_code['form_id'];
	$label_field	= unserialize($edit_short_code['string']);
?>
	<center><h2>Edit Short Code Form</h2></center>
	<input type="hidden" id="hidden_shotcode_id" value="<?php echo $edit_short_code['id']; ?>">
	<div class="form-group col-md-12">
		<label for="text">Shot Code Name</label>
		<input type="text" class="form-control" id="shot_code_name" placeholder="Enter text" value="<?php echo $shotcode_name; ?>" name="shot_code_name">
	</div>
	<?php 
		foreach ($label_field as $key => $value) { ?>
			<div class="form-group col-md-6">
				<label for="text">Label Name</label>
				<input type="text" class="form-control label_name"  value="<?php echo $key ?>" id="text" placeholder="Enter text" name="label[]">
			</div>
			<div class="form-group col-md-6">
				<label for="pwd">Field Name</label>
				<input type="text" class="form-control field_name" id="field" value="<?php echo $value ?>" placeholder="text,password" name="field[]">
			</div>
	<?php } ?>
	<div class="custome_form"></div>
	<center><input type="button" id="add_add_more_field" class="btn btn-default" value="Add More">
	<button type="submit" id="update_add_more_details" class="btn btn-default">Update Short Code</button></center>