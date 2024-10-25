export default function Student() {
  return (
    <div>
      <h2>Studies</h2>
      <form>
        <form>
          <input id="ssc" type="radio" name="studies" />
          <label for="scc" >SSC</label>
          <br />
          <input id="hssc" type="radio" name="studies" />
          <label for="hssc">HSSC</label>
          <br />
          <input id="grad" type="radio" name="studies" />
          <label for="grad">Graduate</label>
          <br />
        </form>
        <label htmlFor=""> Degree : </label>
        <input type="text" maxLength={20} placeholder="BS Fine Arts" />
        <br />
        <label htmlFor=""> Institute : </label>
        <input type="text" placeholder="Yale"/>
      </form>
    </div>
  );
}
