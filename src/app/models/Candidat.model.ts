export class Candidat {
  constructor(
    public _id: number,
    public nom: string,
    public prenom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
}

// export class Candidat {
//   private _id: string;
//   protected nom: string;
//   public prenom: string;

//   constructor(_id: string, nom: string, prenom: string) {
//     this._id = _id;
//     this.nom = nom;
//     this.prenom = prenom;
//   }
// }
