$('.form-group > input.form-control').blur(function() {
  input = $(this)
  value = input.val()
  value_default = input.prop('placeholder');
  value_changed = (value != '') && (value != value_default);
  group = input.closest('.form-group')

  //console.log('bluring ' + input  + ' with value ' + value + ' with default ' +
  //  value_default + ' changed ' + value_changed )

  if (value_changed) {
    group.addClass('edited');
  } else {
    input.val(''); // show placeholder instead of value entered that = default
    group.removeClass('edited');
  }
});

$(document).ready(function(){
  $('.form-group > input.form-control').each(function() {
    input = $(this)

    // Placeholder for all checkboxes is 1.0 or 0.0.
    //
    // Placeholder value is a string and not a float or int.
    //
    // The form should be setting the default value to "checked"
    // or "unchecked", instead of using a stringy placeholder, but I decided to
    // leave the form as-is to avoid dealing with the spaghetti form code.
    if (input.attr("type") == "checkbox"){
      value = input.prop("checked") ? "1.0" : "0.0"
    } else {
      value = input.val()
    }
    value_default = input.prop('placeholder');
    value_changed = (value != '') && (value != value_default);
    group = input.closest('.form-group')
    if (value_changed) {
      group.addClass('edited');
    } else {
      input.val('');
      group.removeClass('edited');
    }
  })

  $("#depreciation").find("input[type=radio]:checked").each(function(){
    if($(this).prop("placeholder") == "False"){
      $("#depreciation .collapse").addClass("in")
    }
  })

  $('div.inputs-block-content').each(function(){
    var that = this;
    is_edited = $(that).find('div.form-group').hasClass("edited");
    if(is_edited){
      $(that).find("div.collapse").addClass("in");
      $(that).find("span.glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus")
    }
  })

  $("button.collapse-button").each(function(){
    $(this).on("click", function(){
      span = $(this).find("span")
      if(span.hasClass("glyphicon-plus")){
        span.removeClass("glyphicon-plus")
        span.addClass("glyphicon-minus")
      } else {
        span.removeClass("glyphicon-minus")
        span.addClass("glyphicon-plus")
      }
    })
  })

  $("form").on("submit", function(e){
    var that = this;
    $(this).find("input[type=checkbox]").each(function(){
      if($(this).prop("checked")){
        $(this).val("True");
      } else {
        $(this).val("False");
      }
    })
  })
})
