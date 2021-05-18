<template>
  <!-- BEGIN: Main Menu-->
  <!--  background="#283046"-->
  <!--  text-white-->
  <div>
    <home-header></home-header>
    <vs-sidebar
      v-model="active"
      background="#283046"
      text-white
      color="#7367F0"
      style="border-radius: 0px"
      :open="!flag"
    >
      <template v-if="!mobile" #logo>
        <img src="~assets/dashboard/logo/multitask.png" alt="avatar" />
        <h6
          style="
            color: whitesmoke;
            font-style: normal;
            font-family: 'system-ui';
            margin-left: 10px;
          "
        >
          {{ $get('AppName') }}
        </h6>
      </template>
      <template v-else #logo>
        <i
          class="bx bx-sidebar"
          style="font-size: 25px"
          @click="collapse()"
        ></i>
      </template>

      <div v-for="item in menuContainer" :key="item.id">
        <vs-sidebar-item
          v-if="!item.sub_items"
          :to="item.route !== undefined ? item.route : '#'"
        >
          <template #icon>
            <span v-html="item.icon"></span>
          </template>
          {{ item.title }}
        </vs-sidebar-item>

        <vs-sidebar-group v-else>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <span v-html="item.icon"></span>
              </template>

              {{ item.title }}
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item
            v-for="sub in item.sub_items"
            :key="sub.id"
            :to="sub.route"
          >
            <template #icon>
              <span v-html="sub.icon"></span>
            </template>
            {{ sub.title }}
          </vs-sidebar-item>
        </vs-sidebar-group>
      </div>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar circle badge badge-color="success">
            <img
              src="~assets/dashboard/app-assets/images/avatars/2.png"
              alt=""
            />
          </vs-avatar>
          <vs-avatar circle color="#fff" @click="collapse()">
            <i class="bx bx-toggle-left"></i>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>

  <!-- END: Main Menu-->
</template>

<script src="./_index.js"></script>

<style scoped></style>
