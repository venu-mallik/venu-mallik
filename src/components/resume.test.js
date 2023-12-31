// Generated by CodiumAI

describe('PersonalInfo_function', () => {

    // Tests that the PersonalInfo component renders without errors
    it('renders without errors', () => {
        const wrapper = shallow(<PersonalInfo />);
        expect(wrapper.exists()).toBe(true);
    });


    // Tests that the PersonalInfo function displays personal information
    it('test_display_personal_info', () => {
        const wrapper = shallow(<PersonalInfo />);
        const email = wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(0).find('span').text();
        const telephone = wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(1).find('span').text();
        const address = wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(2).find('span').text();
        expect(email).toEqual('venu.mallik@gmail.com');
        expect(telephone).toEqual('+91 98859 20369');
        expect(address).toEqual('Vijayawada , Andhra Pradesh, India');
    });


    // Tests that the skills and progress bars are displayed correctly
    it('test_display_skills_and_progress_bars', () => {
        const wrapper = shallow(<PersonalInfo />);
        const progressBars = wrapper.find('Progress');
        expect(progressBars).toHaveLength(6);
        expect(progressBars.at(0).prop('percent')).toEqual(90);
        expect(progressBars.at(1).prop('percent')).toEqual(80);
        expect(progressBars.at(2).prop('percent')).toEqual(80);
        expect(progressBars.at(3).prop('percent')).toEqual(75);
        expect(progressBars.at(4).prop('percent')).toEqual(70);
        expect(progressBars.at(5).prop('percent')).toEqual(60);
    });


    // Tests that changing the experience time period updates the displayed experience value
    it('test_change_experience_time_period', () => {
        const wrapper = mount(<PersonalInfo />);
        const exp = wrapper.find(Segmented).at(0);
        const expValue = wrapper.find(Descriptions.Item).at(5);
        exp.props().onChange('Weeks');
        expect(expValue.text()).toContain('261');
        exp.props().onChange('Months');
        expect(expValue.text()).toContain('9.0');
        exp.props().onChange('Years');
        expect(expValue.text()).toContain('5.0');
    });


    // Tests that changing the skills category updates the displayed skills
    it('test_change_skills_category', () => {
        const wrapper = mount(<PersonalInfo />);
        const backendOption = wrapper.find('Segmented').findWhere(n => n.text() === 'Backend');
        backendOption.simulate('click');
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'Python & FastAPI')).toHaveLength(1);
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'Pandas & Data Visualisation')).toHaveLength(1);
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'MySQL & Mongo DB')).toHaveLength(1);
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'Javascript & (ReactJS, Next JS)')).toHaveLength(1);
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'S3, SES API, Open Stack, Google Firebase')).toHaveLength(0);
        expect(wrapper.find('Descriptions').findWhere(n => n.text() === 'Devops, Queues & Caching')).toHaveLength(0);
    });


    // Tests that an invalid input for experience time period is handled correctly
    it('test_invalid_input_experience_time_period', () => {
        const { getByText } = render(<PersonalInfo />);
        const expSegmented = getByText('Years');
        fireEvent.click(expSegmented);
        const weeksOption = getByText('Weeks');
        fireEvent.click(weeksOption);
        const invalidOption = getByText('Invalid');
        fireEvent.click(invalidOption);
        const expValue = getByText('2.1');
        expect(expValue).toBeInTheDocument();
    });


    // Tests that the function handles missing personal information by not throwing any errors and rendering the component without any personal information
    it('test_missing_personal_info', () => {
        const { Content } = Layout;
        const wrapper = mount(<PersonalInfo />);
        expect(wrapper.find(Content).text()).not.toContain('Email');
        expect(wrapper.find(Content).text()).not.toContain('Telephone');
        expect(wrapper.find(Content).text()).not.toContain('Address');
    });


    // Tests that the function handles missing skills information by not rendering any skills descriptions
    it('test_missing_skills_information', () => {
        const { container } = render(<PersonalInfo />);
        const skillsDescriptions = container.querySelector('.ant-descriptions');
        const skillsItems = skillsDescriptions.querySelectorAll('.ant-descriptions-item-label');
        expect(skillsItems.length).toBe(0);
    });


    // Tests that the PersonalInfo function is responsive on different screen sizes
    it('test_responsiveness_on_different_screen_sizes', () => {
        const { container } = render(<PersonalInfo />);
        expect(container).toMatchSnapshot();
    });


    // Tests that all content in PersonalInfo function is accessible for users with disabilities
    it('test_accessibility_for_users_with_disabilities', () => {
        const { container } = render(<PersonalInfo />);
        const results = axe(container);
        expect(results).toHaveNoViolations();
    });


    // Tests that the links to external resources are valid and open in a new tab
    it('test_links_to_external_resources', () => {
        const wrapper = mount(<PersonalInfo />);
        const links = wrapper.find('a');
        links.forEach(link => {
            expect(link.prop('target')).toEqual('_blank');
            expect(link.prop('href')).toMatch(/^https?:\/\//);
        });
    });


    // Tests that the layout and styling of the PersonalInfo component is correct
    it('test_layout_and_styling', () => {
        const wrapper = mount(<PersonalInfo />);
        expect(wrapper.find(Layout)).toHaveLength(1);
        expect(wrapper.find(Content)).toHaveLength(1);
        expect(wrapper.find(Descriptions)).toHaveLength(2);
        expect(wrapper.find(Segmented)).toHaveLength(2);
        expect(wrapper.find('ul')).toHaveLength(1);
    });


    // Tests that PersonalInfo component renders with different props
    it('test_different_props', () => {
        const wrapper = shallow(<PersonalInfo />);
        expect(wrapper.find(Descriptions)).toHaveLength(2);
        expect(wrapper.find(Segmented)).toHaveLength(2);
        expect(wrapper.find(Progress)).toHaveLength(6);
    });


    // Tests that the PersonalInfo component renders without errors
    it('renders without errors', () => {
        const wrapper = shallow(<PersonalInfo />);
        expect(wrapper.exists()).toBe(true);
    });


    // Tests that personal information is displayed correctly
    it('test_display_personal_info', () => {
        const wrapper = mount(<PersonalInfo />);
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(0).text()).toEqual('venu.mallik@gmail.com');
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(1).text()).toEqual('+91 98859 20369');
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(2).text()).toEqual('Vijayawada , Andhra Pradesh, India');
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(3).find('a').at(0).prop('href')).toEqual('https://www.github.com/vrworkers');
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(3).find('a').at(1).prop('href')).toEqual('https://www.linkedin.com/in/venumallik');
        expect(wrapper.find('Descriptions').at(0).find('DescriptionsItem').at(3).find('a').at(2).prop('href')).toEqual('https://docs.google.com/document/d/e/2PACX-1vRYWPmGjM90SLMVlSbc0TgisJ4ww4EsjEg9DESVEwUU9kCOl4_e6t3fgs7c7F7zIVdJn1uEVvG-8W41/pub?embedded=true');
    });


});
