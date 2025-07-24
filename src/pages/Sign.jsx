
const Sign = () => {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="id" placeholder="Id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="info" type="submit">
        Sign in
      </Button>
    </Form>
  )

}
export default Sign