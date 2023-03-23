// 매번 preset 옵션을 달아주는 것이 번거로울 때, 해당 파일에 프리셋을 설정해두면 'npm babel'이라는 명령어만을 통해 babel을 실행할 수 있음 !
module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
