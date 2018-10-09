jQuery(document).ready(function(){
	jQuery("#add_more").click(function(e){
		e.preventDefault();
		jQuery(".custome_form").append('<div class="form-group col-md-6"><label for="text">Label Name</label><input type="text" class="form-control label_name" id="text" placeholder="Enter text" name="label[]"></div><div class="form-group col-md-6"><label for="pwd">Field Name</label><input type="text" class="form-control field_name" placeholder="text,password" name="field[]"></div>');
	});

	jQuery("#submit").click(function(e){
		e.preventDefault();
		var field_name = jQuery(".field_name").map(function(){
			return jQuery(this).val();
		}).get();

		var label_name = jQuery(".label_name").map(function(){
			return jQuery(this).val();
		}).get();
         var shortcode_name = jQuery("#shot_code_name").val();  
		var stringData = JSON.stringify({field_name:field_name,label_name:label_name,shortcode_name:shortcode_name});

         	jQuery.ajax({
			type: 'post',
			url:ajaxurl,
			data: {
				action:"shot_code_register",
				shot_code:stringData,
			},
			success: function(data) {
				console.log(data);
				location. reload(true);

			},
			error: function(errorThrown){
				location. reload(true);
				
			} 
		});
	});

	jQuery(".edit_short_code").click(function(){
		var short_code_id = jQuery(this).attr("value");
		jQuery.ajax({
			type:"post",
			url:ajaxurl,
			data:{
				action:"edit_short_code",
				short_code_id:short_code_id,
			},
			success:function(data){
				jQuery(".show-form-hide").hide();
				jQuery(".edit-form").html(data);
				
			}
		});
	});

		jQuery(".delete_short_code").click(function(){
		var short_code_id = jQuery(this).attr("value");
		jQuery.ajax({
			type:"post",
			url:ajaxurl,
			data:{
				action:"delete_short_code",
				short_code_id:short_code_id,
			},
			success:function(data){
				console.log(data);
				var data = jQuery.parseJSON(data);
				if(data['status'] =='1'){
					// jQuery(".response").html("<h2>Shot Code Deleted Successfully</h2>");
					location. reload(true);
				}else{
					location. reload(true);
					console.log("Shot Code Not Deleted ");

				}
			}
		});
	});

});