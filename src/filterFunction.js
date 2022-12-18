import MotorcycleCard from "./components/MotorcycleCard";

let mappedMotorcycles=[];
export const filterFunction = (filteredMotos, skillFilterSelected) => {
    if (skillFilterSelected !== "all") {
      const filteredSkillsMotos = filteredMotos.filter((moto) => moto.skill === skillFilterSelected);
      mappedMotorcycles = filteredSkillsMotos.map((motorcycle, i) => {
        return (
          <div key={i}>
            <MotorcycleCard motorcycle={motorcycle} />
          </div>
        )
      })
    } else {
      mappedMotorcycles = filteredMotos.map((motorcycle, i) => {
        return (
          <div key={i}>
            <MotorcycleCard motorcycle={motorcycle} />
          </div>
        )
      })
    }
    return mappedMotorcycles;
  }