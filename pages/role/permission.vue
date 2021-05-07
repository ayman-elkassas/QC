<template>
  <div>
    <div>
      <div class="row">
        <div class="col-12">
          <div class="alert alert-primary" role="alert">
            <div class="alert-body">
              <strong>Info:</strong> This layout can be useful for getting
              started with empty content section. Please check the&nbsp;<a
                class="text-primary"
                href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-empty.html"
                target="_blank"
                >Layout empty documentation</a
              >&nbsp; for more details.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <vs-button flat primary
                ><i class="bx bx-plus"></i> Add Permission</vs-button
              >
            </div>
            <div class="card-body">
              <div class="center">
                <vs-table v-model="selected" striped>
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template #thead>
                    <vs-tr>
                      <vs-th>
                        <vs-checkbox
                          v-model="allCheck"
                          :indeterminate="selected.length == users.length"
                          @change="selected = $vs.checkAll(selected, users)"
                        />
                      </vs-th>
                      <vs-th
                        sort
                        @click="users = $vs.sortData($event, users, 'name')"
                      >
                        Name
                      </vs-th>
                      <vs-th
                        sort
                        @click="users = $vs.sortData($event, users, 'email')"
                      >
                        Email
                      </vs-th>
                      <vs-th
                        sort
                        @click="users = $vs.sortData($event, users, 'id')"
                      >
                        Id
                      </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      v-for="(tr, i) in $vs.getPage(
                        $vs.getSearch(users, search),
                        page,
                        max
                      )"
                      :key="i"
                      :data="tr"
                      :is-selected="!!selected.includes(tr)"
                      not-click-selected
                      open-expand-only-td
                    >
                      <vs-td checkbox>
                        <vs-checkbox v-model="selected" :val="tr" />
                      </vs-td>
                      <vs-td
                        edit
                        @click="
                          ;(edit = tr), (editProp = 'name'), (editActive = true)
                        "
                      >
                        {{ tr.name }}
                      </vs-td>
                      <vs-td>
                        {{ tr.email }}
                      </vs-td>
                      <vs-td>
                        {{ tr.id }}
                      </vs-td>
                    </vs-tr>
                  </template>
                  <template #footer>
                    <vs-pagination
                      v-model="page"
                      :length="$vs.getLength($vs.getSearch(users, search), max)"
                    />
                  </template>
                </vs-table>

                <vs-dialog v-model="editActive">
                  <template #header> Change Prop {{ editProp }} </template>
                  <vs-input
                    v-if="editProp == 'email'"
                    v-model="edit[editProp]"
                    @keypress.enter="editActive = false"
                  />
                  <vs-select
                    v-if="editProp == 'name'"
                    v-model="edit[editProp]"
                    block
                    placeholder="Select"
                    @change="editActive = false"
                  >
                    <vs-option label="Vuesax" value="Vuesax">
                      Vuesax
                    </vs-option>
                    <vs-option label="Vue" value="Vuejs"> Vue </vs-option>
                    <vs-option label="Javascript" value="Javascript">
                      Javascript
                    </vs-option>
                    <vs-option disabled label="Sass" value="Sass">
                      Sass
                    </vs-option>
                    <vs-option label="Typescript" value="Typescript">
                      Typescript
                    </vs-option>
                    <vs-option label="Webpack" value="Webpack">
                      Webpack
                    </vs-option>
                    <vs-option label="Nodejs" value="Nodejs">
                      Nodejs
                    </vs-option>
                  </vs-select>
                </vs-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Permission',
  layout: 'dashboard/home',
  data: () => ({
    editActive: false,
    edit: null,
    editProp: {},
    search: '',
    allCheck: false,
    page: 1,
    max: 20,
    active: 0,
    selected: [],
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info',
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io',
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net',
      },
    ],
  }),
}
</script>

<style scoped></style>
