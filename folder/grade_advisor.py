def get_score(score):
    if score in range(70, 101):
        return "A"
    elif score in range(50, 70):
        return "B"
    else:
        raise ValueError