<template>
  <div class="user">
    <div>
      <div><strong>Имя: </strong>{{user.name}}</div>
      <div><strong>Никнейм: </strong>{{user.username}}</div>
      <div><strong>E-mail: </strong>{{user.email}}</div>
      <div><strong>Адрес: </strong>
        <div class="address">
          <div><strong>Улица: </strong>{{user.address?.street}}</div>
          <div><strong>Дом: </strong>{{user.address?.suite}}</div>
          <div><strong>Город: </strong>{{user.address?.city}}</div>
          <div><strong>Почтовый индекс: </strong>{{user.address?.zipcode}}</div>

          <div><strong>Геолокация: </strong>
            <div class="geo">
              <div><strong>Ширина: </strong>{{user.address?.geo.lat}}</div>
              <div><strong>Долгота: </strong>{{user.address?.geo.lng}}</div>
            </div>
          </div>
        </div>
      </div>
      <div><strong>Телефон: </strong>{{user.phone}}</div>
      <div><strong>Веб-сайт: </strong>{{user.website}}</div>
      <div><strong>Компания: </strong>
        <div class="company">
          <div><strong>Название: </strong>{{user.company?.name}}</div>
          <div><strong>Ключевая фраза: </strong>{{user.company?.catchPhrase}}</div>
          <div><strong>Бизнес стратегия: </strong>{{user.company?.bs}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>
.user {
  padding: 15px;
}

.address {
  margin-left: 30px;
}

.geo {
  margin-left: 30px;
}

.company {
  margin-left: 30px;
}

</style>