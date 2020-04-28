import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../css/footer.module.scss'

const Footer: React.FC = () => (
  <Container fluid>
    <Row>
      <Col xs={12} className={styles.content}>
        &copy; Nikolai Kiselev {new Date().getFullYear()}
      </Col>
    </Row>
  </Container>
)

export default Footer
