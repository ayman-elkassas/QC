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
              <vs-button flat primary @click="openAdd()">
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
                      <vs-th
                        sort
                        @click="data = $vs.sortData($event, data, 'name')"
                      >
                        Permission name
                      </vs-th>
                      <vs-th
                        sort
                        @click="data = $vs.sortData($event, data, 'group')"
                      >
                        Group
                      </vs-th>
                      <vs-th> Edit </vs-th>
                      <vs-th> Delete </vs-th>
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
                      <vs-td>
                        <vs-row>
                          <vs-col w="12">
                            <vs-button
                              circle
                              icon
                              flat
                              @click="openEdit(tr.id)"
                            >
                              <i class="bx bx-edit-alt"></i>
                            </vs-button>
                          </vs-col>
                        </vs-row>
                      </vs-td>
                      <vs-td>
                        <vs-row>
                          <vs-col w="12">
                            <vs-button
                              circle
                              danger
                              icon
                              flat
                              @click="openDelete(tr.id)"
                            >
                              <i class="bx bx-trash-alt"></i>
                            </vs-button>
                          </vs-col>
                        </vs-row>
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

    <!--    add, edit ops-->
    <dialogue-ops
      :operation="ops"
      :active="activeP"
      :operation-name="operationName"
      :module-name="moduleName"
      :submit-name="submitName"
      :dispatch-call="dispatchCall"
      :dispatch-refresh="dispatchRefresh"
      :edit-item-id="editItemId"
      :instance-save-request="instanceSaveReq"
    ></dialogue-ops>

    <!--    delete ops-->
    <dialogue-delete
      :active="activeDelete"
      :module-name="moduleName"
      :delete-item-id="deleteItemId"
      :dispatch-call="dispatchCall"
      :dispatch-refresh="dispatchRefresh"
    ></dialogue-delete>
  </div>
</template>

<script src="static/scripts/permission/_index.js"></script>

<style scoped></style>
