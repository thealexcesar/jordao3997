<template>
  <div class="main-content">




    <h1>{{ msg }}</h1>

    <div class="additional-content">
      <h1>{{ $t('welcome') }}</h1>
      <p>{{ $t('about') }}</p>
      <p>{{ $t('contact') }}</p>
    </div>
  </div>

  <section id="destaque" class="destaque">
    <div class="container">
      <h2>Seu Evento em um Ambiente Exclusivo</h2>
      <p>Oferecemos um espaço elegante e versátil para todos os tipos de eventos.</p>
      <a href="#contato" class="btn">Solicite um Orçamento</a>
    </div>
  </section>

  <section id="sobre" class="sobre">
    <div class="container">
      <h2>Sobre Nós</h2>
      <p>
        Autem sit quo. Ad et autem. Et sit similique.Excepturi quidem molestias. Non unde delectus. Veritatis ex reiciendis.Et sed accusamus. Esse enim voluptate. Voluptas atque sit.Reprehenderit et possimus. Suscipit qui quidem. Nam pariatur dolorem.Voluptatem recusandae sint. Est accusamus ea. Nobis rerum ullam.Autem consequatur et. Error quia eos. Molestias unde perferendis.Iusto est id. Odit consequatur est. Eligendi labore autem.Autem quasi blanditiis. Doloremque architecto maxime. Ipsum id repudiandae.Magnam reiciendis facilis. Asperiores odit quod. Dolorem qui minus.Sunt sint hic. Facilis consequatur quibusdam. Recusandae aliquid sed.
      </p>
    </div>
  </section>

  <section id="servicos" class="servicos">
    <div class="container">
      <h2>Nossos Serviços</h2>
      <div class="servicos-grid">
        <div class="servico">
          <h3>Serviço de Buffet</h3>
          <p>
            Fuga iure doloribus. Quas est sit. Vero dolorem sed.Deleniti et ut. Delectus nam recusandae. Qui consequatur a.Ipsum eum qui. Quia modi vel. Saepe et quod.
          </p>
        </div>
        <div class="servico">
          <h3>Decoração Personalizada</h3>
          <p>
            Aut qui repudiandae. Perferendis necessitatibus magnam. Accusantium et maxime.Consequatur dolorum vel. Velit occaecati labore. Et nisi consequatur.Ut ut corrupti. Et quia pariatur. Reprehenderit deleniti corporis.
          </p>
        </div>
        <div class="servico">
          <h3>Capacidade para Grandes Grupos</h3>
          <p>
            Excepturi ipsa quia. Quia provident autem. Non nostrum blanditiis.Fugit id consequatur. Quis ullam modi. Eligendi dignissimos nulla.Corrupti itaque facere. Perspiciatis temporibus repudiandae. Nemo est rerum.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="galeria" class="galeria">
    <div class="container">
      <h2>Galeria de Eventos</h2>
      <div class="galeria-grid">
        <!-- Aqui você pode adicionar suas imagens da galeria -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  props: {
    msg: String
  }
}
</script>