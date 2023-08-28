import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => {
        const q = query.toLowerCase()
        const { title, description, city, bedrooms, category, owner } = rental
        let isContained = false
        if (title.toLowerCase().includes(q)) {
          isContained = true
        }
        if (description.toLowerCase().includes(q)) {
          isContained = true
        }
        if (city.toLowerCase().includes(q)) {
          isContained = true
        }
        if (bedrooms.toString().includes(q)) {
          isContained = true
        }
        if (category.toLowerCase().includes(q)) {
          isContained = true
        }
        if (owner.toLowerCase().includes(q)) {
          isContained = true
        }
        return isContained
      });
    }

    return rentals;
  }
}
