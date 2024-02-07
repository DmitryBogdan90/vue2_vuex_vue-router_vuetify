import { httpService } from '@/utils/http-service';

export function getData({ commit }) {
  return httpService.getData()
    .then(response => {
      commit('SET_DATA', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

export function getDataById({ commit }, id) {
  return httpService.getDataById(id)
    .then(response => {
      commit('SET_DATA', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

export function getDataByFilter({ commit }, memberConfig) {
  return httpService.getDataByFilter(memberConfig)
    .then(response => {
      commit('SET_DATA', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

export function getDataByPage({ commit }, [page, limit]) {
  return httpService.getDataByPage([page, limit])
    .then(response => {
      commit('SET_DATA', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

export function postData({ commit }, memberConfig) {
  return httpService.postData(memberConfig)
    .then(response => {
      commit('POST_SUCCESS', response.data);
    })
    .catch(error => {
      console.error('Error posting data:', error);
      throw error;
    });
}

export function patchData({ commit }, [id, memberConfig]) {
  return httpService.patchData(id, memberConfig)
    .then(response => {
      commit('PATCH_SUCCESS', response.data);
    })
    .catch(error => {
      console.error('Error patching data:', error);
      throw error;
    });
}

export function putData({ commit }, [id, memberConfig]) {
  return httpService.putData(id, memberConfig)
    .then(response => {
      commit('PUT_SUCCESS', response.data);
    })
    .catch(error => {
      console.error('Error putting data:', error);
      throw error;
    });
}

export function deleteData({ commit }, id) {
  return httpService.deleteData(id)
    .then(response => {
      commit('DELETE_SUCCESS', response.data);
    })
    .catch(error => {
      console.error('Error deleting data:', error);
      throw error;
    });
}

export function changeDrawerStatus({ commit }) {
  return commit('CHANGE_DRAWER_STATUS');
}

export function changeMemberStatus({ commit }, status) {
  return commit('CHANGE_MEMBER_STATUS', status);
}

export function focusMember({commit}, id) {
  return commit('FOCUS_MEMBER', id)
}