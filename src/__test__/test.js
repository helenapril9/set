import Team  from '../app';
test('addCharacterToThrow', () =>  {    
    expect(() => {
        result = new Team();
        result.add("John Doe");
        result.add("John Doe");            
    }).toThrow(); 
})

test('addAll', () => {       
    const result = new Team();
    result.addAll("John Doe","John Doe", "Jack Black","Jack");
 expect(result.members.size).toBe(3)});

 
 test('toArray', () => {       
    const result = new Team();
    result.addAll("John Doe","John Doe", "Jack Black","Jack");      
 expect(result.toArray()).toStrictEqual(["John Doe", "Jack Black","Jack"])});
 
 
 