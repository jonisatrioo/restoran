import RestoSource from '../../../public/data/resto-source';
import { createRestoItemTemplate } from '../template/template-creator';

const RestoList = {
  async render() {
    return `
      <div class="content">
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listResto = await RestoSource.getResto();
    const restosContainer = document.querySelector('#restos');
    listResto.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestoList;
