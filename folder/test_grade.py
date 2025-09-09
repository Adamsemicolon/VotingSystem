import unittest
import grade_advisor

class MyTestCase(unittest.TestCase):
    def test_that_code_test_works(self):
        self.assertEqual(grade_advisor.get_score(70), "A")  # add assertion here
        self.assertRaises(ValueError, grade_advisor.get_score, 30)
        self.assertRaises(ValueError, grade_advisor.get_score, 49)
        self.assertEqual(grade_advisor.get_score(56), "B")

