module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.3', // Verificar versão do MongoDB utilizado em produção
      skipMD5: true
    },
    autoStart: false,
    instance: {}
  }
}
