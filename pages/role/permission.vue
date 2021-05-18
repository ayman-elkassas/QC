<template>
  <div>
    <div>
      <div class="row">
        <div class="col-12">
          <div class="alert alert-primary" role="alert">
            <div class="alert-body">
              <strong>Info:</strong> Admin Can CRUD permissions
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <vs-button flat primary @click="active = !active">
                <i class="bx bx-plus"></i> Add Permission</vs-button
              >
            </div>
            <div class="card-body">
              <div class="center">
                <vs-table v-model="selected" striped>
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template v-if="getPermissions.length > 0" #thead>
                    <vs-tr>
                      <vs-th>
                        <vs-checkbox
                          v-model="allCheck"
                          :indeterminate="selected.length === data.length"
                          @change="selected = $vs.checkAll(selected, data)"
                        />
                      </vs-th>
                      <vs-th
                        sort
                        @click="data = $vs.sortData($event, data, 'id')"
                      >
                        Id
                      </vs-th>
                      <vs-th> Permission name </vs-th>
                      <vs-th> Group </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      v-for="(tr, i) in $vs.getPage(
                        $vs.getSearch(data, search),
                        page,
                        max
                      )"
                      :key="i"
                      :data="tr"
                      :is-selected="!!selected.includes(tr)"
                    >
                      <vs-td checkbox>
                        <vs-checkbox v-model="selected" :val="tr" />
                      </vs-td>
                      <vs-td>
                        {{ tr.id }}
                      </vs-td>
                      <vs-td>
                        {{ tr.name }}
                      </vs-td>
                      <vs-td>
                        {{ tr.group }}
                      </vs-td>
                    </vs-tr>
                  </template>
                  <template #footer>
                    <vs-pagination
                      v-model="page"
                      :length="$vs.getLength($vs.getSearch(data, search), max)"
                    />
                  </template>
                </vs-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Add <b>Permission</b></h4>
      </template>

      <div class="con-form">
        <vs-input
          v-model="request.name"
          label="Name"
          placeholder="Permission name"
        />
        <br />
        <br />
        <vs-input
          v-model="request.group"
          label="Group name"
          placeholder="Group name"
        />
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button
            block
            :disabled="!(request.name && request.group)"
            @click="addPermission()"
          >
            Add Permission
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script src="../../static/scripts/permission/_index.js"></script>

<style scoped></style>
