export class DrinkService {
  drinkServiceAPI() {
    return 'api/v2/drinks.json';
  }

  /**
   *
   * @returns {Promise<Drink[]>}
   */
  async getDrinks() {
    const response = await fetch(this.drinkServiceAPI());
    return response.json();
  }
}

export const drinkService = new DrinkService();
