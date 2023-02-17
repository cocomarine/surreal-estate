const reactRouterDom = jest.createMockFromModule("react-router-dom");

reactRouterDom.withRouter = ({ children }) => children;

module.exports = reactRouterDom;
