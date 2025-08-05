$(document).ready(function () {
  function generateAnimeCode(config) {
    let code = `anime({\n  targets: '#box',\n`;
    code += `  ${config.type}: '${config.value}',\n`;
    code += `  duration: ${config.duration},\n`;
    code += `  delay: ${config.delay},\n`;
    code += `  easing: '${config.easing}'\n});`;
    return code;
  }

  function animateBox(config) {
    let animation = {
      targets: '#box',
      duration: config.duration,
      delay: config.delay,
      easing: config.easing
    };

    animation[config.type] = config.value;
    anime(animation);

    $('#codeOutput').text(generateAnimeCode(config));
  }

  $('#animateBtn').click(function () {
    const config = {
      type: $('#animationType').val(),
      value: $('#animationValue').val(),
      duration: parseInt($('#duration').val()),
      delay: parseInt($('#delay').val()),
      easing: $('#easing').val()
    };
    animateBox(config);
  });

  $('#resetBtn').click(function () {
    $('#box').removeAttr('style'); // reset
    $('#codeOutput').text('// Código será exibido aqui');
  });

  $('#exampleBtn').click(function () {
    $('#animationType').val('translateX');
    $('#animationValue').val('300');
    $('#duration').val('1200');
    $('#delay').val('200');
    $('#easing').val('easeOutBounce');
  });
});
